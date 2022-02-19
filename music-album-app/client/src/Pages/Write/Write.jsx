import React from 'react'
import "./Write.css"
export default function Write() {
    return (
        <div className="write">
            <img className="write-img" src="https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg" alt="" />
            <form className="write-form">
                <div className="write-form-grp">
                    <label htmlFor="write-form-inp-img">
                    <i className="write-icon-add fa-solid fa-folder-plus"></i>
                    </label>
                    <input type="file"  id="write-form-inp-img" style={{display:'none'}} />
                    <input type="text" placeholder="Album Title" className="write-form-input input-title" autoFocus={true}/>
                </div>

                <div className="write-form-grp">
                    <textarea placeholder="Add Discription for Album..." type="text" className="write-form-input input-text" ></textarea>
                </div>
                <button className="write-submit" >Publish</button>
            </form>
        </div>
    )
}
