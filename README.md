星端电竞官方网站
==============

[![GitHub 发布](https://img.shields.io/github/v/release/xingduandianjing/xingduandianjing.github.io?style=flat-square&color=blue&sort=semver&label=%E5%8F%91%E5%B8%83)](https://github.com/xingduandianjing/xingduandianjing.github.io/releases)
[![GitHub 热门语言](https://img.shields.io/github/languages/top/xingduandianjing/xingduandianjing.github.io?style=flat-square&color=success)](https://github.com/xingduandianjing/xingduandianjing.github.io)
[![GitHub 许可证](https://img.shields.io/github/license/xingduandianjing/xingduandianjing.github.io?style=flat-square&color=yellow&label=%E8%AE%B8%E5%8F%AF%E8%AF%81)](https://github.com/xingduandianjing/xingduandianjing.github.io/blob/master/LICENSE)

这是星端电竞的官方网站。内容包括网站项目文件。

### 网站目录
- 网站首页 [http://www.stars-gaming.com/#/](http://www.stars-gaming.com/#/)
- 分店信息 [http://www.stars-gaming.com/#/branches/](http://www.stars-gaming.com/#/branches/)
- 店内无线网 [http://www.stars-gaming.com/#/wifi/](http://www.stars-gaming.com/#/wifi/)
- 浏览器首页 [http://www.stars-gaming.com/#/browser/](http://www.stars-gaming.com/#/browser/)
- 微信公众号 [http://www.stars-gaming.com/#/wechat/](http://www.stars-gaming.com/#/wechat/)

### 安装说明
1. 运行 `npm install` 安装项目组件。
2. 运行 `npm run build` 构建网站。
2. 前往 [GitHub](https://github.com/organizations/xingduandianjing/repositories/new) 创建远程git仓库。
3. 在项目文件夹内，创建本地git仓库。
4. 提交现有项目文件到 `master` 分支并推送到远程git仓库。
5. 前往 [GitHub](https://github.com/xingduandianjing/xingduandianjing.github.io/releases/new) 创建一个新发布。
6. 运行 `npm run deploy` 部署网站。
7. 前往 [GitHub](https://github.com/xingduandianjing/xingduandianjing.github.io/settings) 更新 __GitHub Pages__ > __Source__ 使用 `gh-pages` 分支。
8. 打开 "Enforce HTTPS" 选项。

### 更新说明
1. 进行所需的文件更改。
2. 更新 `package.json` 文件中的 `version`。
3. 运行 `npm run build` 构建网站。
4. 将更新的项目文件提交到 `master` 分支并推送到远程git仓库。
5. 前往 [GitHub](https://github.com/xingduandianjing/xingduandianjing.github.io/releases/new) 创建一个新发布。
6. 使用 `npm run deploy` 部署网站。
