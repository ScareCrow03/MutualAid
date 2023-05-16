import logo from './logo.svg';
import './App.css';
import Homestructure from "./views/homestructure";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Myview from "./views/myview";
import Communityview from "./views/communityview";
import Messageview from "./views/messageview";
import Homeview from "./views/homeview";
import Itemdetailview from "./views/itemdetailview";
import Communitydetailview from "./views/communitydetailview"
import Loginview from "./views/loginview";
import {useEffect, useState} from "react";
import Favoriteview from "./views/favoriteview";
import {getItems} from "./services/itemService";
import Orderview from "./views/orderview";
import Chat from "./views/chat";
import {ChatView} from "./views/chatview";
import {ChatRouter} from "./views/chatsidebar";


function App() {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        getItems(items_callback);
    },[])
    const items_callback=(data)=>{
        setItems(data)
        console.log(items)
    }
    // const items=[
    //     {
    //         item_id:1,
    //         user_id:2,
    //         name:"小王子",
    //         state:0,
    //         image:"http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
    //         number:2,
    //         description:"出售小王子一本"
    //     },
    //     {
    //         item_id:2,
    //         user_id:2,
    //         name:"大王子",
    //         state:1,
    //         image:"http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
    //         number:5,
    //         description:"出售大王子一本"
    //     },
    //     {
    //         item_id:3,
    //         user_id:2,
    //         name:"老王子",
    //         state:-1,
    //         image:"http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
    //         number:5,
    //         description:"出售老王子一本"
    //     },
    // ]
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homestructure></Homestructure>}>
            <Route exact index element={<Homeview items={items}></Homeview>}/>
            <Route exact path='community' element={<Communityview></Communityview>}/>
            <Route exact path='message' element={<ChatRouter></ChatRouter>}>
                <Route exact path='chat' element={<ChatView></ChatView>}/>
            </Route>
            <Route exact path='myview' element={<Myview></Myview>}/>
            {/*{*/}
            {/*    items?.map(item=>{*/}
            {/*        if(item.state==0){*/}
            {/*            return (*/}
            {/*                <Route exact path={'detail'+item.itemId} element={<Itemdetailview item={item}></Itemdetailview>}/>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    })*/}
            {/*}*/}
            <Route exact path='detail/:id' element={<Itemdetailview></Itemdetailview>}/>
            <Route exact path='community/:id' element={<Communitydetailview></Communitydetailview>}/>
            <Route exact path='favorite' element={<Favoriteview></Favoriteview>}/>
            <Route exact path='order' element={<Orderview></Orderview>}/>
        </Route>
        <Route path='login' element={<Loginview></Loginview>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
