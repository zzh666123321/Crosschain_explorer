<template>
  <div>
    <div>
      <input v-model="searchKeyword1" type="text" placeholder="输入想要查询的块高" />
      <button @click="search">Search</button>
    </div>
    <div>
      <input v-model="searchKeyword2" type="text" placeholder="输入想要查询的交易ID" />
      <button @click="search">Search</button>
    </div>
    <div>
      <input v-model="searchKeyword3" type="text" placeholder="Enter your search keyword" />
      <button @click="search">Search</button>
    </div>
    <div>
      <h3>Search Results</h3>
      <ul>
        <li v-for="(result, index) in searchResults" :key="index">{{ result }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword1: "",
      searchKeyword2: "",
      searchKeyword3: "",
      searchResults: []
    };
  },
  methods: {
    search() {
      // Perform search with the entered keywords and update searchResults
      const results1 = this.performSearch(this.searchKeyword1);
      const results2 = this.performSearch(this.searchKeyword2);
      const results3 = this.performSearch(this.searchKeyword3);

      this.searchResults = results1.concat(results2, results3);
    },
    performSearch(keyword) {
      // Implement search logic using the keyword and return the results
      // Replace the following line with actual search logic
      return ["Result 1 for " + keyword, "Result 2 for " + keyword];
    }
  }
};
</script>
