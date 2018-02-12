import * as React from 'react';
import * as ReactDOM from 'react-dom';
import axios from 'axios';
import './donateForm.scss';

export default class DonateForm extends React.Component<any,any> {

    private stripe: any
    private card: any

    constructor(props: any) {
        super(props);
        this.state = { cardholderName: "", email: "", address: "", phone: "", occupation: "", chargeAmount: "", donationSuccess: false };
        this.stripe = Stripe('pk_test_Lg182Yf8xYQu1tgH64Nl5Svm');

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    }

    componentDidMount() {
        let cardElementArgs = {
            iconStyle: 'solid',
            style: {
                base: {
                    iconColor: '#8898AA',
                    color: '#000',
                    lineHeight: '36px',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '19px',

                    '::placeholder': {
                        color: '#8898AA',
                    },
                },
                invalid: {
                    iconColor: '#e85746',
                    color: '#e85746',
                }
            },
            classes: {
                focus: 'is-focused',
                empty: 'is-empty',
            }
        };

        let elements = this.stripe.elements();
        this.card = elements.create('card', cardElementArgs);
        this.card.mount('#card-element');
        this.card.on('change', (event) => {
            this.setOutcome(event);
        });
    }

    handleChange(e) {

        if (e.target.name == "phone") {
            const re = /^[-0-9x.+()\b ]+$/;
            if (e.target.value != '' && !re.test(e.target.value)) {
                return; // test failed
            }
        } else if (e.target.name == "chargeAmount") {
            const re = /^[0-9.\b]+$/;
            if (e.target.value != '' && !re.test(e.target.value)) {
                return; // test failed
            }
        }

        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleOnFocus(e) {
        e.target.classList.add('is-focused');
    }

    handleOnBlur(e) {
        e.target.classList.remove('is-focused');
    }

    handleOnKeyUp(e) {
        if (e.target.value.length === 0) {
            e.target.classList.add('is-empty');
        } else {
            e.target.classList.remove('is-empty');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.stripe.createToken(this.card).then((result) => {

            this.setOutcome(result);
            let token = result.token;

            axios.post('/api/charge', {
                token: token.id,
                cardholderName: this.state.cardholderName,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone,
                occupation: this.state.occupation,
                chargeAmount: this.state.chargeAmount
            })
            .then((response) => {
                this.setState({
                    donationSuccess: true
                });
            })
            .catch((error) => {
                this.setOutcome(error.response.data);
            });
        });
    }

    setOutcome(result) {
        var successElement = document.querySelector('.success');
        var errorElement = document.querySelector('.error');
        successElement.classList.remove('visible');
        errorElement.classList.remove('visible');

        if (result.token) {
            // Use the token to create a charge or a customer
            // https://stripe.com/docs/charges
            successElement.querySelector('.token').textContent = result.token.id;
            successElement.classList.add('visible');
        } else if (result.error) {
            errorElement.textContent = result.error.message;
            errorElement.classList.add('visible');
        } else if (result.message && result.statusCode == 400) {
            console.log('ERROR', result.message);
            errorElement.textContent = result.message;
            errorElement.classList.add('visible');
        }
    }

    render() {
        return (
            <div>

            { !this.state.donationSuccess ?
                <form method="post" id="payment-form" onSubmit={this.handleSubmit}>
                    {/* <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Large button
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}
                    <label>
                        <input name="cardholderName" className="field is-empty" placeholder="Jane Doe" onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Name</span></span>
                    </label>
                    <label>
                        <input name="email" className="field is-empty" placeholder="example@gmail.com" onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Email</span></span>
                    </label>
                    <label>
                        <input name="address" className="field is-empty" placeholder="123 example Ave" onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Address</span></span>
                    </label>
                    <label>
                        <input name="phone" className="field is-empty" placeholder="(123) 456-7890" type="tel" value={this.state.phone} onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Phone</span></span>
                    </label>
                    <label>
                        <input name="occupation" className="field is-empty" placeholder="" onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Occupation</span></span>
                    </label>
                    <label>
                        <input name="chargeAmount" className="field is-empty inline-field" placeholder="0" value={this.state.chargeAmount} onChange={this.handleChange} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} onKeyUp={this.handleOnKeyUp} />
                        <span><span>Amount</span></span>
                        <span className="input-addon">$</span>
                    </label>
                    <label>
                        <div id="card-element" className="field is-empty"></div>
                        <span><span>Card</span></span>
                    </label>

                    <button className="btn" type="submit">Donate</button>

                    <div className="outcome">
                        <div className="error" role="alert"></div>
                        <div className="success">
                            Success! Your Stripe token is <span className="token"></span>
                        </div>
                    </div>
                </form>
            :
                <div className="donation-success">
                    Thank you for your donation {this.state.cardholderName}!
                </div>
            }

            </div>
        )
    }
}
