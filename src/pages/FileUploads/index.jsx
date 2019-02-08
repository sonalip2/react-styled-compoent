import React, { Component } from 'react';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import BasicFileUpload from '../../components/BasicFileUpload'
import Img from '../../elements/Image';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};
class FileUploads extends Component {
    state = {
        files: []
    }
    onDrop = (files) => {
        this.setState({
            files: files.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))
        });

    }
    render() {
        const { files } = this.state;

        const thumbs = files.map(file => (
            <BasicFileUpload key={file.name}>
                <Img
                    src={file.preview}
                />
            </BasicFileUpload>
        ));

        return (
            <section>
                <Dropzone onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                            >
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop files here...</p> :
                                        <p>Try dropping some files here, or click to select files to upload.</p>
                                }
                            </div>
                        )
                    }}
                </Dropzone>
                <aside style={thumbsContainer}>
                    {thumbs}
                </aside>
            </section>
        );
    }
}

export default FileUploads;