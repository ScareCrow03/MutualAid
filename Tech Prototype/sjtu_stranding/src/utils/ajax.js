let postRequest = (url, data, callback) => {
    let formData = new FormData();
    // console.log("postRequest", url, data);
    for (let p in data) {
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }
    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url, opts)
        .then((response) => response.json())
        .then((data) => {
            // var result = data.map(item => Object.keys(item).map(i => item[i]));
            // callback(result);
            // console.log("fetch", data);
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
export {postRequest};