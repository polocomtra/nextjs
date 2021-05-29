import { useState } from "react";
import Breadcrumb from "./Breadcrumb"
import InfoAccount from "./InfoAccount"
import ListData from "./ListData";
import NavAccount from "./NavAccount";
import {data} from '../../data'

const Main = () => {
    const [items,setItems]=useState(data)
    return (
        <main className="main-content">
            <div className="container">
                <div className="container">
                    <Breadcrumb />
                    <InfoAccount />
                    <div className="row mb-4">
                        <NavAccount />
                        <ListData items={items} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;