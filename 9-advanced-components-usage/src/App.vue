<template>
  <div class="container">
    <div class="row">
        <button @click="selectedComponent='appQuote'">Quote</button>
        <button @click="selectedComponent='appAuthor'">Author</button>
        <button @click="selectedComponent='appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>

        <keep-alive>
          <component :is="selectedComponent">
            Default Content
          </component>
        </keep-alive>

        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wondefrul quote!</p>
        </app-quote> -->
    </div><!-- /.row -->
  </div><!-- /.container -->
</template>

<script type="text/javascript">
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    data: function() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>
</style>