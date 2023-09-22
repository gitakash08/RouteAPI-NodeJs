module.exports = {
    getApi: (req, res) => {
        res.json({ messages: "Welcome to Testing Api by Akash Tripathi." });
    },
    getFirstVertex: async (req, res) => {
        let lat = req.query.lat;
        let long = req.query.lng;

        fetch(`http://mlinfomap.org:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=routing%3Anearest_vertex&viewparams=x:${long};y:${lat};&outputformat=application/json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                return res.status(200).json({ status: 'OK', data: data});
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    },
    getSecondVertex: async (req, res) => {
        let lat = req.query.lat;
        let long = req.query.lng

        fetch(`http://mlinfomap.org:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=routing%3Anearest_vertex&viewparams=x:${long};y:${lat};&outputformat=application/json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                return res.status(200).json({ status: 'OK', data: data});
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    },
    getRouteUsingVertex: async (req, res)=>{
        let vertex_1 = req.query.ver1;
        let vertex_2 = req.query.ver2;
        let url= "";
        fetch(`http://mlinfomap.org:8080/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=routing%3Ashortest_path&viewparams=source:${vertex_1};target:${vertex_2};&outputformat=application/json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                return res.status(200).json({ status: 'OK', data: data});
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
};	