<template>
  <div class="app-wrapper">
    <div class="sidebar-container">sidebar</div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">navbar</div>
        <div class="tags-view">tags view</div>
      </div>
      <div class="app-main">
        <div>app main</div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      background: #faa;
      .navbar {
        height: 50px;
        background: cyan;
      }
      .tags-view {
        height: 34px;
        background: #afa;
      }
    }
    .app-main {
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
