import footerContact from '../API/FooterApi.json'
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

export const Footers = () => {

    // we have created this footerIcon because, the icons in json is a componenets,
    //  but components cannot be passed as a value. and we access them via creating a array. []
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return (
        <footer className="footer-section">
            <div className="container grid-three-cols">
                {
                    footerContact.map((currData, idx) => {
                        const{icon, title, details} = currData;
                        return (
                            <div className='footer-contact'>
                                <div className="icon">{footerIcon[icon]}</div>
                                <div className="footer-contact-text">
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </footer>
    )
}