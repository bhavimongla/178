let latitude=22.7868542 , longitude=88.3643296
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map=new mapboxgl.Map({
    conatainer:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    centre:[longitude,latitude],
    zoom:16


})
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
    )
map.addControl(

    new mapboxgl.GeolocateControl({

        positionOptions:{
            enableHighAccuracy:true

        },
        trackUserLocation:true
    })
)
