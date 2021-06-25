# 状态管理目录

> 用于放状态管理相关的代码

1. 全局的state, getters, mutations, actions直接放在store目录下对应的文件中
2. 各子模块的状态管理应当在module中创建一个js文件，将state, getters, mutations, actions放在该js中
3. module中定义的状态在`store/index.js`中统一导入
4. 所有的`Mutations`类型都应该在`mutationTypes.js`中导出