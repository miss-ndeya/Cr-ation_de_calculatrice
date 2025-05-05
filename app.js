class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, type, className, onClick, onChange, disabled } = this.props;
    return (
      <input
        type={type}
        disabled={disabled}
        className={className}
        placeholder="0"
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
    );
  }
}

class Calculatrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      result: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value, result: "" });
  };

  handleCalcul = (e) => {
    this.setState({ value: this.state.value + e.target.value, result: "" });
  };

  handleDelete = () => {
    this.setState({ value: this.state.value.slice(0, -1), result: "" });
  };

  handleDeleteAll = () => {
    this.setState({ value: "", result: "" });
  };

  handleResult = () => {
    try {
      const result = eval(this.state.value);
      this.setState({ result: result.toString() });
    } catch (error) {
      this.setState({ result: "Erreur" });
    }
  };

  render() {
    const { value, result } = this.state;
    return (
      <div className=" contaner px-4 py-5 mx-auto  shadow">
        <div className=" rounded-3 w-100 mx-auto">
          <form className=" bg-white mx-auto  w-100 px-3 pt-3 rounded-3">
            <h1 className="fs-6">Ma calculatrice</h1>
            <div className="display d-flex flex-column border">
              <Input
                type="text"
                className="border-0 px-3 fw-bold fs-5"
                value={value}
                onChange={this.handleChange}
                disabled="disabled"
              />
              <Input
                type="text"
                className="border-0 px-3 fw-bold fs-5  text-start "
                disabled="disabled"
                value={result}
                onChange={this.handleChange}
              />
            </div>
            <div className="pt-4 col-12 mx-auto m-0 d-flex gap-2">
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="AC"
                onClick={this.handleDeleteAll}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="/"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="%"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="DE"
                onClick={this.handleDelete}
              />
            </div>
            <div className="col-12 mx-auto m-0 d-flex gap-2">
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="7"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="8"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="9"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="*"
                onClick={this.handleCalcul}
              />
            </div>
            <div className="col-12 mx-auto m-0 d-flex gap-2">
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="4"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark my-2 shadow"
                value="5"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark me-1 my-2 shadow"
                value="6"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark  my-2 shadow"
                value="-"
                onClick={this.handleCalcul}
              />
            </div>
            <div className="col-12 mx-auto m-0 d-flex gap-2">
              <Input
                type="button"
                className="btn w-25  rounded-3 border border-dark fw-bold text-dark  shadow"
                value="1"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25  rounded-3 border border-dark fw-bold text-dark  shadow"
                value="2"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25  rounded-3 border border-dark fw-bold text-dark  shadow"
                value="3"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25  rounded-3 border border-dark fw-bold text-dark  shadow"
                value="+"
                onClick={this.handleCalcul}
              />
            </div>
            <div className="col-12 mx-auto m-0 d-flex gap-2">
              <Input
                type="button"
                className="btn w-50 rounded-3 border border-dark fw-bold text-dark  my-2 shadow"
                value="0"
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25 rounded-3 border border-dark fw-bold text-dark  my-2 shadow"
                value="."
                onClick={this.handleCalcul}
              />
              <Input
                type="button"
                className="btn w-25  rounded-3 border border-dark fw-bold text-dark  my-2 shadow"
                value="DE"
                onClick={this.handleDelete}
              />
            </div>
            <div className="pb-2 col-12 m-0">
              <Input
                type="button"
                className="btn w-100 rounded-3 border border-dark fw-bold text-dark  my-2 shadow"
                value="="
                onClick={this.handleResult}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculatrice />, document.querySelector("#root"));
