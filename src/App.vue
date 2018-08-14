<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ welcome }}
    h2 {{ createdBy }}
      i.fa.fa-linkedin-square

    .container
      .columns
        .column.is-12
          section.info-tiles
            .tile.is-ancestor.has-text-centered
              .tile.is-parent
                article.tile.is-child.box
                  p.title 439k
                  p.subtitle Total del día
              .tile.is-parent
                article.tile.is-child.box
                  p.title +
                  p.subtitle Nuevo
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
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
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
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus
                        tr
                          td(width='5%')
                            i.fa.fa-chevron-right
                          td Lorum ipsum dolem aire
                          td
                            a.button.is-small.is-primary(href='#')
                              i.fa.fa-plus

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      welcome: 'Bienvenido',
      name: 'Leonel',
      lastname: 'Rojas',
    }
  },

  computed: {
    createdBy() {
      return 'Creado por: ' + this.name + ' ' + this.lastname
    }
  },
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
