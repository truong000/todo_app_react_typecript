import React, {Component} from 'react';
import Items from '../mockdata/Items';

class ItemEdit extends Component<any, any> {

    constructor(props: any) {    
        super(props);
        this.state = {
            items: Items,
            indexEdit: props.indexEdit,
            idEdit: props.idEdit,
            nameEdit: props.nameEdit,
            levelEdit: props.levelEdit,
            arrayLevel: props.arrayLevel
        }
    }          

    // handleEditClickCancel = () => {
    //     this.setState({
    //         idEdit: ''
    //     });
    //     console.log(this.props.idEdit);
    // }
    
    handleEditInputChange = (value: any) => {
        this.setState({
            nameEdit: value
        });
        console.log(value);
    }

    handleEditSelectChange = (value: any) => {
        this.setState({
            levelEdit: value
        });
        console.log(this.state.levelEdit)
    }

    renderLevel = () => {
        const {arrayLevel} = this.state;
        return arrayLevel.map((level: number, index: number) =>{
            switch (level) {
                case 0:
                    return <option key={index} value={level}>Lowl</option>
                case 1:
                    return <option key={index} value={level}>Medium</option>    
                default:
                    return <option key={index} value={level}>High</option>
            }
        });
    }

    render() {
        return(
            <tr>
                <td className="text-center">
                    {this.props.indexEdit}
                </td>
                <td>
                <input 
                    type="text" className="form-control" 
                    value={this.state.nameEdit} 
                    onChange={(event) => this.handleEditInputChange(event.target.value)}
                />

                </td>
                <td className="text-center">
                    <select 
                        className="form-control" 
                        value={this.state.levelEdit}
                        onChange={(event) => this.handleEditSelectChange(event.target.value)}>
                        {this.renderLevel()}
                    </select>
                </td>
                <td>
                <button type="button" className="btn btn-default btn-sm marginR5" onClick={() => this.props.handleEditClickCancel()}>Cancel</button>
                <button type="button" className="btn btn-success btn-sm" onClick={() => this.props.handleEditClickSubmit(this.state.nameEdit, this.state.levelEdit)}>Save</button>
                </td>
            </tr>
        )
    }
}

export default ItemEdit; 
