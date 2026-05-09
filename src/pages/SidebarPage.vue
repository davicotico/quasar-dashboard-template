<script setup lang="ts">
const CODE = `
// sidebar.type.ts
type MenuItem = {
  text: string;
  tooltip?: string;
  href?: string;
  icon?: string;
  children?: MenuItem[];
};
// script
const menuItems: MenuItem[] = [];
// template
<sidebar-menu :menu-items="menuItems" />
`;
</script>
<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col">
        <h3>Sidebar</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <code>
          <pre>
            {{ CODE }}
          </pre>
        </code>
      </div>
    </div>
  </div>
</template>
