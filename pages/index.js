import { useEffect, useRef, useState } from 'react';
import MusicSheet from '../components/MusicSheet.component';
import Navbar from "../components/Navbar.component";


export default function Index() {
    const [notes, setNotes] = useState(['X32 | X32 | X32 |', 'X32 | X32 | X32 |', 'X32 | X32 | X32 |', 'X32 | X32 | X32 |', 'X32 | X32 | X32|', 'X32 | X32 | X32|', 'X32 | X32 | X32|']);
    const [media, setMedia] = useState('');
    const [selected, setSelected] = useState(0);

    const changeNotesHandler = (e) => {
        const copy = [...notes];
        copy[selected] = e.target.value;
        setNotes(copy);
    };
    const changeMediaHandler = (e) => {
        const media = e.target.value;
        if (!media.match(/\d\/\d/)) console.log('Does not match requirement');
        setMedia(media);
    };

    const selectHandler = (index) => {
        setSelected(index);
    };

    const addTrackHandler = () => {
        setNotes([...notes, '']);
    };

    const removeTrackHandler = (index) => {
        setNotes([...notes].filter((_, i) => i !== index));
    };

    return (
        <div className="container-page">
            <Navbar />
            <div class="main" >
                <div class="row" style={{ height: "100%" }}>
                    <div class="col-lg-7">
                        <div style={{ height: "100%" }}>
                            <div id="sheet">
                                <h1>Title</h1>
                                <div id="_sheet">
                                    {notes.map((note, index) => (
                                        <div key={index} style={{ width: "100%" }}>
                                            <MusicSheet
                                                title=''
                                                length='1'
                                                media={media}
                                                key='C trebel'
                                                notes={note || 'abc'}
                                            ></MusicSheet>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div id="_control">
                                <div id="button-control">
                                    <button><i class="fa-solid fa-backward-step"></i></button>
                                    <button><i class="fa-solid fa-play"></i></button>
                                    <button><i class="fa-solid fa-forward-step"></i></button>
                                </div>
                                <div id="time-bar">
                                    <span id="_time_start">00:00</span>
                                    <span id="_progress_bar">
                                        <i class="fa-solid fa-circle"></i>
                                    </span>
                                    <span id="_time_end">00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div id="tool-bar">
                            <h1>Tool bar</h1>
                            <div id="media">
                                <div className="d-flex justify-content-between bd-highlight">
                                    <div className="p-2 bd-highlight" id="numerator">
                                        <span>Numerator</span>
                                        <input />
                                    </div>
                                    <div className="p-2 bd-highlight" id="denominator">
                                        <span>Denominator</span>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div id="tick_per_beat">
                                <div className="p-2 bd-highlight">
                                    <span>Tick per beat</span>
                                    <input />
                                </div>
                            </div>
                            <div id="make_sheet">
                                <div className="d-flex justify-content-between bd-highlight">
                                    <div className="p-2 bd-highlight" id="random_note">
                                        <button><i class="fa-solid fa-music-note"></i> Random Note</button>
                                    </div>
                                    <div className="p-2 bd-highlight" id="predict_note">
                                        <button><i class="fa-regular fa-microchip-ai"></i> Fill Note</button>
                                    </div>
                                </div>
                            </div>
                            <div id="download">
                                <p>Download file:</p>
                                <div className="d-flex justify-content-between bd-highlight">
                                    <div className="p-2 bd-highlight" id="pdf">
                                        <button><i class="fa-regular fa-file-pdf"></i> .PDF</button>
                                    </div>
                                    <div className="p-2 bd-highlight" id="midi">
                                        <button><i class="fa-regular fa-file-music"></i> .MIDI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
