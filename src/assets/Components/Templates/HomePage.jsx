import { useEffect, useState } from "react"
import TableCoin from "../Moduls/TableCoin";
import { getCoinList } from "../../../sevices/CryptoApi";

function HomePage() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(getCoinList())
            const json = await res.json();
            setCoins(json)
        }
        getData();
    }, [])
    return (
        <div>
            <TableCoin coins={coins} />
        </div>
    )
}

export default HomePage