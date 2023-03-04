import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {navMenu} from '../export/NavMenu'
import xBtnIcon from '../assets/icons/x-button.png'
function SideBar() {
    const [clickedMenu,setClickedMenu] = useState([])
    console.log(clickedMenu);
    function addToClickedMenu(item) {
        let isHave = false
        clickedMenu.forEach(clickedItem=> {
            if(clickedItem.index==item.index) {
                isHave = true
            }
            
        }
        )
        if(isHave) {
            return;
        }
        setClickedMenu([...clickedMenu,item])
    }
    function removeClickedMenu(item) {
        setClickedMenu(
            clickedMenu.filter(clickedItem=> {
                return clickedItem.index != item.index
            })
        )
    }
  return (
    <section className="sidebar">
        
        <nav>
            
            <div className="nav_setting"></div>
            <ul className="nav_links">
                <div className="logo">JTurganbaev</div>
                {
                    navMenu.map((item,index)=>{
                        return (
                            <li className="nav_link" key={index}>
                                <NavLink to={item.url} onClick={()=> {
                                    addToClickedMenu(item)
                                }}>
                                    <img src={item.icon}/>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
        <div className="clicked_menu">
                {
                    clickedMenu.length> 0 ? (
                        clickedMenu.map((item,index)=> {
                            return (
                                <NavLink to={item.url} key={item.index}
                                className={({isActive})=>(isActive ? 'clicked_item clicked_item_active' : 'clicked_item')}
                                >
                                    <img src={item.icon}/> {item.title}
                                    <button className="x-btn">
                                            <img src={xBtnIcon} 
                                                onClick={()=> {
                                                    removeClickedMenu(item)
                                                }}
                                            />
                                    </button>
                                </NavLink>
                            )
                        })
                    ) : ''
                }
        </div>
    </section>
  )
}

export default SideBar