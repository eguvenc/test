<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <!-- <date-input></date-input>
        <date-input></date-input> -->
      </v-col> 

      <v-col>
        <div
          class="circle-stencil"
          :style="style"
        >
          <draggable-element
            class="circle-stencil__handler"
            @drag="onResize"
            @drag-end="onResizeEnd"
          >
          <img :src="img" @mousedown.prevent>
          </draggable-element>
          <draggable-area @move="onMove" @move-end="onMoveEnd">
            <stencil-preview
              class="circle-stencil__preview"
          :image="image"
          :coordinates="coordinates"
          :width="stencilCoordinates.width"
          :height="stencilCoordinates.height"
          :transitions="transitions"
            />
          </draggable-area>
        </div>
      </v-col>

    </v-row>
  </v-container>
  
</template>

<script>
// import DateInput from './components/DateInput.vue';

import {
  DraggableElement,
  DraggableArea,
  StencilPreview,
  ResizeEvent
} from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
  components: {
    // DateInput,
    StencilPreview,
    DraggableArea,
    DraggableElement
  },
  props: {
    image: {
      type: Object
    },
    coordinates: {
      type: Object,
    },
    transitions: {
      type: Object,
    },
    stencilCoordinates: {
      type: Object,
    },
  },
  data() {
    return {
      img: 'https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg',
    };
  },
  computed: {
    style() {
      const { height, width, left, top } = this.stencilCoordinates;
      const style = {
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${left}px, ${top}px)`
      };
      if (this.transitions && this.transitions.enabled) {
        style.transition = `${this.transitions.time}ms ${this.transitions.timingFunction}`;
      }
      return style;
    }
  },
  methods: {
    onMove(moveEvent) {
      this.$emit('move', moveEvent);
    },
    onMoveEnd() {
          this.$emit('move-end');
        },
    onResize(dragEvent) {
      const shift = dragEvent.shift();

      const widthResize = shift.left;
      const heightResize = -shift.top;

      this.$emit('resize', new ResizeEvent(
        {
          left: widthResize,
          right: widthResize,
          top: heightResize,
          bottom: heightResize,
        },
        {
          compensate: true,
        },
      ));
    },
    onResizeEnd() {
      this.$emit('resize-end');
    },
    aspectRatios() {
      return {
        minimum: 1,
        maximum: 1
      };
    }

  }, // end methods
}
</script>

<style lang="scss">
.circle-stencil {
  border-radius: 50%;
  cursor: move;
  position: absolute;
  border: dashed 2px white;
  box-sizing: border-box;
  &__handler {
    position: absolute;
    right: 15%;
    top: 14%;
    z-index: 1;
    cursor: ne-resize;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(50%, -50%);
  }
  &__preview {
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>