/**
 * Created by Liang on 2018/8/22.
 */
const fs = require('fs');
const path = require('path');

function generateRootDeal(dir) {
    let root = {}
    const DirFiles = fs.readdirSync(path.resolve(__dirname, dir));
    DirFiles.forEach(filename => {
        root = Object.assign(root,require(`./${dir}/${filename}`))
    })
    for(let name in root) {
        let handle = root[name];
        const tb = +new Date();
        console.log("root",root[name]);
        root[name] = async function(data = {}, req, schema) {
            console.log('in');
            try {
                const { filters, method } = handle
                if(filters && filters.length > 0) {
                    for(let i = 0, len = filters.length; i < len; i++) {
                        await filters()
                    }
                }
                console.log("data=========",data);
                return await method(data, req, schema)
            }catch(e) {
                console.error(e)
                throw new Error(e)
            }finally {
                const te = +new Date();
                console.info(`接口时间${te - tb}`)
            }
        }
    }

}
module.exports = {
    mis: generateRootDeal('mis'),
    test: generateRootDeal('test')
}