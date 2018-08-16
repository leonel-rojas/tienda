<template lang="pug">
  #app
    img(src="./assets/logo-merak.png")
    h1 {{ welcome }}
    h2 {{ createdBy }}
      i.fa.fa-linkedin-square

    .container
      .columns
        .column.is-12
          article.tile.is-child.box
                  .field
                    .control
                      input.input.is-rounded(type="text", placeholder="Nombre", v-model="newProduct.name")

                  .field
                    .control
                      textarea.textarea(type="textarea", placeholder="Comentario", v-model="newProduct.comment")

                  .field
                    .control
                      input.input.is-rounded(type="number", placeholder="Precio", v-model="newProduct.price")
                  
                  .field
                    .control
                      p.buttons
                        a.button.is-small.is-primary(@click="addProduct")
                          span.icon
                            i.fa.fa-plus
                        
                        a.button.is-small.is-danger(@click="clear")
                          span.icon
                            i.fa.fa-times
      .columns
        .column.is-12
          section.info-tiles
            .tile.is-ancestor.has-text-centered
              .tile.is-parent
                article.tile.is-child.box
                  p.title {{ totalProducts }}
                  p.subtitle Total de productos registrados
              .tile.is-parent
                article.tile.is-child.box
                  p.title 439k
                  p.subtitle Total del día

                  
          .columns
            .column.is-6
              .card.events-card
                header.card-header
                  p.card-header-title
                    | Productos
                  a.card-header-icon(href='#', aria-label='more options')
                    span.icon
                      i.fa.fa-angle-down(aria-hidden='true')
                .card-table
                  .content
                    table.table.is-fullwidth.is-striped
                      tbody
                        tr(v-for="(p, i) in products") 
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td {{ p.name }} - ${{ p.price }}
                          td
                            p.buttons.is-pulled-right
                              a.button.is-small.is-primary
                                span.icon
                                  i.fa.fa-plus
                              
                              a.button.is-small.is-danger(@click="clear")
                                span.icon
                                  i.fa.fa-times(@click="removeProduct(i)")
            .column.is-6
              .card
                header.card-header
                  p.card-header-title
                    | Buscar producto
                  a.card-header-icon(href='#', aria-label='more options')
                    span.icon
                      i.fa.fa-angle-down(aria-hidden='true')
                .card-content
                  .content
                    .control.has-icons-left.has-icons-right
                      input.input.is-large(type='text', placeholder='')
                      span.icon.is-medium.is-left
                        i.fa.fa-search
                      span.icon.is-medium.is-right
                        i.fa.fa-check
              br
              .card.events-card
                header.card-header
                  p.card-header-title
                    | Ventas del día
                  a.card-header-icon(href='#', aria-label='more options')
                    span.icon
                      i.fa.fa-angle-down(aria-hidden='true')
                .card-table
                  .content
                    table.table.is-fullwidth.is-striped
                      tbody
                        tr(v-for="(p, i) in daySales") 
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td {{ p.name }} - ${{ p.price }}
                          td
                            p.buttons.is-pulled-right
                              a.button.is-small.is-primary
                                span.icon
                                  i.fa.fa-plus
                              
                              a.button.is-small.is-danger(@click="clear")
                                span.icon
                                  i.fa.fa-times(@click="removeProduct(i)")

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      welcome: "Bienvenido a Merak",
      name: "Leonel",
      lastname: "Rojas",
      products: [],
      daySales: [],
      newProduct: {
        name: "",
        comment: "",
        price: 0,
        date: null
      }
    };
  },

  created() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
    this.daySales = JSON.parse(localStorage.getItem("products-sales")) || [];
  },

  computed: {
    createdBy() {
      return `Creado por: ${this.name} ${this.lastname}`;
    },
    totalDay() {
      if (!this.products.length) {
        return 0;
      }

      let total = 0;

      this.products.forEach(p => {
        total += parseInt(p.price);
      });

      return total;
    },
    totalProducts() {
      return this.products.length
    }
  },
  methods: {
    addProduct() {
      if (!this.newProduct.name || !this.newProduct.price) return;

      this.products.push({
        name: this.newProduct.name,
        price: this.newProduct.price,
        comment: this.newProduct.comment,
        date: new Date()
      });

      localStorage.setItem("products", JSON.stringify(this.products));

      this.newProduct.name = "";
      this.newProduct.comment = "";
      this.newProduct.price = 0;
      this.newProduct.date = null;
    },

    removeProduct(index) {
      this.products.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(this.products));
    },

    clear() {
      this.newProduct.name = "";
      this.newProduct.comment = "";
      this.newProduct.price = 0;
    },

    addProductSale() {
      if (!this.newProduct.name || !this.newProduct.price) return;

      this.products.push({
        name: this.newProduct.name,
        price: this.newProduct.price,
        comment: this.newProduct.comment,
        date: new Date()
      });

      localStorage.setItem("products", JSON.stringify(this.products));

      this.newProduct.name = "";
      this.newProduct.comment = "";
      this.newProduct.price = 0;
      this.newProduct.date = null;
    },
  },

  filters: {
    formatDate(date) {
      var dateObj = new Date(date);
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      return `${day} / ${month} / ${year}`;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
