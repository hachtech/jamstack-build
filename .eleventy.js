module.exports = function(config){
    config.addPassthroughCopy("src/js"); //skip and don't generate 
    return{
dir:{
    input:"src",
    output:"dist",
    data:"_data"
}
    };
};

//af381c955e068b6106c95194984f8ca9ec95ca4e