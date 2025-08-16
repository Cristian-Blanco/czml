async function init() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZjBjZWNjNi1lN2E2LTQxN2EtOWY2MS0xZjliMjIxMDZmMzUiLCJpZCI6MzMxMzU3LCJpYXQiOjE3NTUwNDI1NTB9.CLqrLXgbk4VfneVH0NK8xmkyEll98A0whFdesGkvMTo';

    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrain: Cesium.Terrain.fromWorldTerrain(),
    });

    try {
        const ds = await Cesium.CzmlDataSource.load('circulo_dinamico.czml');
        viewer.dataSources.add(ds);
        await viewer.zoomTo(ds);
    } catch (e) {
        console.error('Error cargando CZML:', e);
    }
}

init();