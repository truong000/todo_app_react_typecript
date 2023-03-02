import './App.css';
import React, {Component} from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Items from './mockdata/Items';
import { v4 as uuidv4 } from 'uuid';


class App extends Component<any, any> {

    constructor(props: any) {    
        super(props);
        let arrayLevel = [];
        if(Items.length > 0) {
            for(let i = 0; i < Items.length; i++){
               if(arrayLevel.indexOf(Items[i].level) === -1){
                    arrayLevel.push(Items[i].level);
               } 
            }
        }
        arrayLevel.sort(function(a, b){return a - b});
        this.state = {
            items: Items,
            arrayLevel: arrayLevel,
            showForm: false,
            valueItem: '',
            sortType: '',
            sortOrder: ''
        }
    } 

    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    handleFormInputChange = (value: any) => {
        this.setState({
            valueItem: value
        });
        console.log(value);
    }

    handleFormSelectChange = (value: any) => {
        this.setState({
            levelItem: value
        })
        console.log(value);
    }

    handleFormClickCancel = () => {
        this.setState({
            valueItem: '',
            levelItem: 0
        })
        console.log(this.state.valueItem, this.state.levelItem);
    }

    handleFormClickSubmit = () => {
        let {valueItem, levelItem} = this.state;
        if(valueItem.trim() === 0) return false;
        let newItem = {
            id: uuidv4(),
            name: valueItem,
            level: +levelItem
        };
        Items.push(newItem);
        this.setState({
            items: Items,
            valueItem: '',
            levelItem: 0,
            showFrom: false
        });
    }

    handleSort = (sortType: any,sortOrder: any) => {
        console.log(sortType + " - " + sortOrder);
    }

    render() {
        return (
            <div className="container">
                <Title />
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort 
                            sortType={this.state.sortType}
                            sortOrder={this.state.sortOrder}
                            handleSort={this.handleSort}
                        />
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block marginB10" onClick={this.handleShowForm}>{(this.state.showForm) ? 'Close Item' : 'Add Item'}</button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                    <Form 
                        showForm={this.state.showForm}
                        arrayLevel={this.state.arrayLevel}
                        valueItem={this.state.valueItem}
                        levelItem={this.state.levelItem}
                        handleFormInputChange={this.handleFormInputChange}
                        handleFormSelectChange={this.handleFormSelectChange}
                        handleFormClickCancel={this.handleFormClickCancel}
                        handleFormClickSubmit={this.handleFormClickSubmit}
                    />
                    </div>
                </div>
                <div>
                    oke oke
                </div>
                <ListItem/>
            </div>
        );
    }
}

export default App;