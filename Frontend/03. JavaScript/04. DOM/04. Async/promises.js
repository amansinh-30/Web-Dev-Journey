const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from${url}`)
        }
    }, delay);
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay);
    })
}


// >>>> fakeRequestCallback <<<<
fakeRequestCallback('books.com/page1',
    function (response) {
        console.log("IT WORKED!!")
        console.log(response)
        fakeRequestCallback('books.com/page2',
            function (response) {
                console.log('YAYY, IT WORK!')
                console.log(response)
                fakeRequestCallback('books.com/page3',
                    function (response) {
                        console.log("YEAH, IT'S WORK")
                        console.log(response)
                    },
                    function (err) {
                        console.log("ERROR (3rd REQ)", err)
                    })
            }, function (err) {
                console.log('ERROR (2nd Req)', err)
            })
    }, function (err) {
        console.log('ERROR..!!', err)
    })