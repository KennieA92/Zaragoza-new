const useImageHandler = () => {

    /**
     * Resizes an image to a maximum width or height
     * @param file 
     * @param maxWidth 
     * @param maxHeight 
     * @returns 
     */
    function resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<Blob> {
        return new Promise((resolve, reject) => {
            // Create a FileReader to read the file
            const reader = new FileReader();

            // Set up the onload event handler
            reader.onload = function (event) {
                // Create an image element
                const image = new Image();

                // Set up the onload event handler for the image
                image.onload = function () {
                    // Calculate the new dimensions
                    let width = image.width;
                    let height = image.height;

                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }

                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }

                    // Create a canvas element
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Set the canvas dimensions
                    canvas.width = width;
                    canvas.height = height;

                    if (ctx)
                        // Draw the image on the canvas
                        ctx.drawImage(image, 0, 0, width, height);

                    // Get the resized data URL from the canvas
                    const resizedDataUrl = canvas.toDataURL(file.type);

                    // Convert the resized data URL to a Blob
                    const resizedBlob = dataUrlToBlob(resizedDataUrl, file.type);

                    // Resolve the Promise with the resized Blob
                    resolve(resizedBlob);
                };

                if (event.target) {
                    // Set the source of the image to the file's data URL
                    image.src = event.target.result as string;
                }
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        });
    }

    // Function to convert Data URL to Blob
    function dataUrlToBlob(dataUrl: string, type: string): Blob {
        // extract the base64-encoded binary data from the Data URL
        const base64Data = dataUrl.split(',')[1];

        // convert the base64-encoded binary data to a Uint8Array
        const uint8Array = new Uint8Array(atob(base64Data).split('').map(char => char.charCodeAt(0)));

        // create a Blob object from the Uint8Array and the specified type
        return new Blob([uint8Array], { type });
    }

    return {
        resizeImage
    }

}
export default useImageHandler