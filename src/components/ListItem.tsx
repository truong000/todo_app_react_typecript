import React, {Component} from 'react';
import Items from '../mockdata/Items';
import Edit from './Edit';
import Item from './Item';

class ListItem extends Component<any,any> {

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
            indexEdit: 0,
            idEdit: '',
            nameEdit: '',
            levelEdit: 0,
            arrayLevel: arrayLevel
        }
    }   
    
    renderItem = () => {
        const { items,idEdit,indexEdit,nameEdit,levelEdit, arrayLevel} = this.state;
        if(items.length === 0){
            return <Item item={0}/>
        }
        return items.map((item: any, index: number) => {
            if(item.id === idEdit){
                return (
                    <Edit key={index}
                        indexEdit={indexEdit}
                        nameEdit={nameEdit}
                        levelEdit={levelEdit}
                        arrayLevel = {arrayLevel}
                        handleEditClickCancel = {this.handleEditClickCancel}
                        />
                )
            }
            return (
                <Item key={index}
                    item = {item}
                    index = {index+1}
                    handleDeleteItem = {this.handleDeleteItem}
                    handleEditItem = {this.handleEditItem}
                />
            )
        });
    }
    
    handleDeleteItem = (id: any) => {
        let {items} = this.state;
        if(items.length > 0) {
            for(let i = 0; i < items.length; i++) {
                if(items[i].id === id) {
                    items.splice(i, 1);
                    break;
                }
            }
            this.setState({
                items: items,
                idAlert: ''
            });
        }
    }    

    handleEditItem = (index: number, item: any) => {
        this.setState({
            indexEdit: index,
            idEdit: item.id,
            nameEdit: item.name,
            levelEdit: item.level
        })
    }

    handleEditClickCancel = () => {
        this.setState({
            idEdit: ''
        });
    }
    

    render() {
        return(
                <div className="panel panel-success">
                    <div className="panel-heading">List Item</div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }} className="text-center">STT</th>
                                <th>Name</th>
                                <th style={{ width: '15%' }} className="text-center">Level</th>
                                <th style={{ width: '15%' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {this.renderItem()}
                        </tbody>
                    </table>
                </div>
                )
               }
           }

export default ListItem;
