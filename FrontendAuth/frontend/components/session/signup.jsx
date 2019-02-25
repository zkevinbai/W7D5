import React from 'react';

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // wrapping in square brackets makes something evaluated before it becomes
    // the key 

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    }

    // wrapping in route gives access to history

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then (() => this.props.history.push('/chirps'));
    }

    render(){
        return(
            <div className="session-form" onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <form>
                    <label>Username:
                        <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.handleInput("username")}
                        />
                    </label>
                    <label>Username:
                        <input 
                            type="email" 
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                        />
                    </label>

                    <input 
                        type="submit" 
                    />
                </form>
            </div>
        )
    }
}

export default SignUp;