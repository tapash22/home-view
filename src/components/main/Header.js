import { Component } from "react"
import {} from 'react-bootstrap-icons'

class Header extends Component{

    constructor(props){
        super(props);
        this.state= {
           lists:[
            {
                id:1,
                name:'Home',
                link:'#',
                icon:''
            },
            {
                id:2,
                name:'About',
                link:'#',
                icon:''
            },
            {
                id:3,
                name:'Products',
                link:'#',
                icon:''
            },
            {
                id:4,
                name:'Blog',
                link:'#',
                icon:''
            },

            ]
        }
    }
    render(){
        return (
            <div className="block">
                <div className="flex justify-between h-auto py-3 px-4 bg-black opacity-80  ">
                    <div >
                        <img src={require('../../assets/logo192.png')} alt="" className="h-6 mx-4"  />
                    </div>
                    <ul className="p-0 m-0 flex justify-end gap-5 px-2">
                        {
                            this.state.lists.map((list)=> {
                                return (
                                    <li className="text-sm font-normal text-white text-center" key={list.id}>
                                        {list.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;