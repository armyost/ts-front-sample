import Footer from "./Footer";
import "../index.css";

function Home() {
    const os = require('os');
    const data_hostname = os.hostname();
    const data_ip = os.networkInterfaces().eth0[0].address;

    return (
        <>
        <br></br>
        <br></br>
            <div>
                <div className="narrow">
                    Server Host Name : {data_hostname}
                </div>
                <div className="narrow">
                    Server IP : {data_ip}
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home;
