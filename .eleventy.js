module.exports = function(config){
    config.addPassthroughCopy("src/js"); //skip and don't generate 
    return{
dir:{
    input:"src",
    output:"dist"
}
    };
};