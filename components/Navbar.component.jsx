import { useRef, useEffect } from 'react';
import Link from 'next/link'

const Navbar = () => {

	return <div className="header">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <script
                src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"
            ></script>
            <link
                rel="stylesheet"
                href="https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css"
            />
            <div className="row no-gutters">
                <div style={{width:"100%"}}>
                    <div className="d-flex justify-content-between bd-highlight mb-3">
                        <div className="p-2 bd-highlight" id="logo-page">
                            <i className="fa-solid fa-list-music"></i><Link href="/"> F.Muse</Link>
                        </div>
                        <div className="p-2 bd-highlight" id="about-page">
                            <Link href="">Contact</Link>
                            <Link href="./wiki">Wiki</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
};

export default Navbar;
