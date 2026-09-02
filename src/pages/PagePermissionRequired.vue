<template>
  <main>
    <Error>
      <template slot="image">
        <img
          src="@/assets/images/dino-1.png"
          srcset="
            @/assets/images/dino-1@2x.png 2x,
            @/assets/images/dino-1@3x.png 3x
          "
        />
      </template>
      <template slot="message">
        <h1>{{ fluent('profile_error_login_required') }}</h1>
      </template>
    </Error>
  </main>
</template>

<script>
import Error from '@/components/ui/Error.vue';
import LinksMixin from '@/components/_mixins/LinksMixin.vue';

export default {
  name: 'PagePermissionRequired',
  mixins: [LinksMixin],
  components: {
    Error,
  },
  computed: {
    errorMessage() {
      if (this.$route.query.message) {
        return this.$route.query.message;
      }
      return null;
    },
  },
};
</script>

<style></style>
