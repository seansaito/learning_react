import React from "react";
import PropTypes from "prop-types";
import { FileIcon } from "./FileIcon";

export function FileName({file}) {
    return (
        <span className='file-name'>
            {file.name}
        </span>
    )
}

FileName.propTypes = {
    file: PropTypes.object.isRequired,
}