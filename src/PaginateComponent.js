<<<<<<< HEAD
import * as React from "react";
import { Page,  Button } from "tabler-react";
class PaginateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [1, 2, 3, 4, 5, 6],
            limit: 5, // optional
            page: 1
        };
    }

paginateValue = (page) => {
    this.setState({ page: page });
    console.log(page) // access this value from parent component 
}

paginatePrevValue = (page) => {
    this.setState({ page: page });
    console.log(page)  // access this value from parent component
}
paginateNxtValue = (page) => {
       this.setState({ page: page });
       console.log(page)  // access this value from parent component
    }
    render() {
        return (
            <div>    
                <div align='center'>
                    <Button.List>
                        <Button
                      disabled={this.state.page === 0}
                      onClick={() => this.paginatePrevValue(this.state.page - 1)}
                            outline
                            color="primary"
                        >
                            Previous
                      </Button>

                        {this.state.array.map((value, index) => {
                            return (
                                <Button
                                    onClick={() => this.paginateValue(value)}
                                    color={
                                        this.state.page === value
                                            ? "primary"
                                            : "secondary"
                                    }
                                >
                                    {value}
                                </Button>
                            );
                        })}
                        <Button
                            onClick={() => this.paginateNxtValue(this.state.page + 1)}
                            outline
                            color="secondary"
                        >
                            Next
                      </Button>
                    </Button.List>
                </div>
            </div>

        )
    }
}

=======
import * as React from "react";
import { Page,  Button } from "tabler-react";
class PaginateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [1, 2, 3, 4, 5, 6],
            limit: 5, // optional
            page: 1
        };
    }

paginateValue = (page) => {
    this.setState({ page: page });
    console.log(page) // access this value from parent component 
}

paginatePrevValue = (page) => {
    this.setState({ page: page });
    console.log(page)  // access this value from parent component
}
paginateNxtValue = (page) => {
       this.setState({ page: page });
       console.log(page)  // access this value from parent component
    }
    render() {
        return (
            <div>    
                <div align='center'>
                    <Button.List>
                        <Button
                      disabled={this.state.page === 0}
                      onClick={() => this.paginatePrevValue(this.state.page - 1)}
                            outline
                            color="primary"
                        >
                            Previous
                      </Button>

                        {this.state.array.map((value, index) => {
                            return (
                                <Button
                                    onClick={() => this.paginateValue(value)}
                                    color={
                                        this.state.page === value
                                            ? "primary"
                                            : "secondary"
                                    }
                                >
                                    {value}
                                </Button>
                            );
                        })}
                        <Button
                            onClick={() => this.paginateNxtValue(this.state.page + 1)}
                            outline
                            color="secondary"
                        >
                            Next
                      </Button>
                    </Button.List>
                </div>
            </div>

        )
    }
}

>>>>>>> 05005930d09261428ad888180b230f0bf3e5b93b
export default PaginateComponent;