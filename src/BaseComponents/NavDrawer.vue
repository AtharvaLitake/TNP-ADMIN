<template>
      <v-navigation-drawer
        expand-on-hover
        rail
        class="bg-primary"
      >
        <v-list>
          <v-list-item
            :prepend-avatar="require('@/Images/pict-logo.jpg')"
            subtitle="Administrator Portal"
            title="TNP ADMIN"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
        </v-list>
      </v-navigation-drawer>  
</template>

<script>
</script>
