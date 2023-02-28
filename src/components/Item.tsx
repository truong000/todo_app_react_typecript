import React, {Component} from 'react';
import Swal from 'sweetalert2';

class Item extends Component<any, any> {
    
    handleShowAlert = (item :any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: item.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result["isConfirmed"]) {
                this.props.handleDeleteItem(this.props.item.id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
          })
    }

    render() {
        let {item,index} = this.props;
        let classNameLabel = '';
        let nameLabel = '';
        switch (item.level) {
            case 1:
                classNameLabel = 'label label-warning';
                nameLabel = 'Medium';
                break;
            case 2:
                classNameLabel = 'label label-danger';
                nameLabel = 'High';
                break;
            default:
                classNameLabel = 'label label-info';
                nameLabel = 'Low';
                break;
        }
        if (this.props.item === 0) {
            return (
                <tr>
                <td className="text-center">  
                    <h4>No Item</h4>
                </td>
            </tr>
            )
        }
        return(

            <tr>               
                <td className="text-center">
                    {index}
                </td>
                <td>
                    {item.name}
                </td>
                <td className="text-center">
                    <span className={classNameLabel}>{nameLabel}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm"onClick={()=> this.props.handleEditItem(index,item)}>Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={()=>this.handleShowAlert(item)}>Delete</button>
                </td>
            </tr>
        )
    }
}
 
export default Item;
