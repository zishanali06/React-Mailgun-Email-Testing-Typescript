import * as React from 'react';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = {
            email: "",
            subject: "",
            message: ""
        };
    }

    handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        let email = {
            to: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(email)
            })
            this.setState({
                email: "",
                subject: "",
                message: ""
            })
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <main className="container">
                <h1 className="covalence-blue">Send Email!</h1>
                <form className="form-group mt-5 border border-primary rounded p-3 shadow-lg bg-info">
                    <section className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            value={this.state.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                        />
                    </section>
                    <label>Subject</label>
                    <section className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.subject}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })}
                        />
                    </section>
                    <section className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            value={this.state.message}
                            rows={3}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ message: e.target.value })}
                        />
                    </section>
                    <button onClick={this.handleClick}>Send Email</button>
                </form>
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    email: string;
    subject: string;
    message: string;
}