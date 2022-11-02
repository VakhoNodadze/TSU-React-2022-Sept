import React, { Component, PureComponent } from "react";
import { Link } from "react-router-dom";
import withRouter from "../utils/withRouter";

class LoginClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: "",
        password: "",
      },
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    console.log("Component Did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.credentials.email !== nextState.credentials.email ||
      this.state.credentials.password !== nextState.credentials.password
    );
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        credentials: {
          ...prevState.credentials,
          [name]: value,
        },
      };
    });
  };

  // handleClick = () => {
  //   this.setState({
  //     credentials: { email: "vaxo@gmail.com", password: "vaxo" },
  //   });
  // };

  render() {
    const {
      credentials: { email, password },
    } = this.state;
    const { redirect } = this.props;

    const handleSubmit = (event) => {
      event.preventDefault();
      const { users } = this.props;
      if (
        users.findIndex(
          (user) => user.email === email && user.password === password
        ) === -1
      ) {
        alert("Incorrect User!");
        return;
      }
      localStorage.setItem("user", JSON.stringify(this.state.credentials));
      redirect("/");
    };

    return (
      <div className="items-center justify-center w-full display">
        <form onSubmit={(e) => handleSubmit(e)}>
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Your email
                    </label>
                    <input
                      onChange={(e) => this.handleInput(e)}
                      value={email}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      onChange={(e) => this.handleInput(e)}
                      value={password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Forgot password?
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                  {/* <button onClick={this.handleClick}>Click me</button> */}
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginClass);
