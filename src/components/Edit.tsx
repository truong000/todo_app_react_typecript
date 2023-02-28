import React, {Component} from 'react';

class ItemEdit extends Component<any, any> {

    renderLevel = () => {
        const {arrayLevel} = this.props;
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
                    value={this.props.nameEdit} 
                />
                </td>
                <td className="text-center">
                    <select className="form-control" value={this.props.levelEdit}>
                        {this.renderLevel()}
                    </select>
                </td>
                <td>
                <button type="button" className="btn btn-default btn-sm marginR5" onClick={() => this.props.handleEditClickCancel()}>Cancel</button>
                    <button type="button" className="btn btn-success btn-sm">Save</button>
                </td>
            </tr>
        )
    }
}

export default ItemEdit;
