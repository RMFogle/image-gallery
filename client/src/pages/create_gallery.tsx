import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootStore, IGallery } from '../utils/TypeScript'

import NotFound from "../components/global/NotFound";



const CreateGallery = () => {
    const initState = {
        user: '',
        title: '',
        content: '',
        description: '',
        thumbnail: '',
        category: '',
        createdAt: new Date().toISOString()
    }

    const [gallery, setGallery] = useState<IGallery>(initState)

    const { auth } = useSelector((state: RootStore) => state)
    const dispatch = useDispatch()

    if(!auth.access_token) return <NotFound />;
    return (
        <div className="my-4 create_gallery">
            <h2>Create Gallery</h2>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h5>Create</h5>
                </div>

                <div className="col-md-6">
                    <h5>Preview</h5>
                </div>
            </div>

        </div>
    )
}

export default CreateGallery