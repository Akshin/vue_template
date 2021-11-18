<template>
  <div
    :class="[
      'w-100',
      'field-wrapper',
      closed && 'closed',
      enabledForInput && 'enabled-for-input',
    ]"
    @click="wrapperClickHandler"
  >
    <component
      v-if="enabledForInput"
      @input="inputHandler"
      @blur="blurHandler"
      :is="getComponentName()"
      :label="placeholder"
      :placeholder="placeholder"
      :items="fieldOptions"
      :value="value"
      :error-messages="errors"
      :type="field.type"
      :editorToolbar="editorToolbar"
      :disabled="disabled"
      :ref="field.name"
      hide-details="auto"
      dense
    />
    <div v-else class="text-field">
      <span>{{ placeholder }}</span>
      <div v-html="value"></div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import editorToolbar from "./data/editorToolbar";
import fieldTypes from "./data/fieldTypes";

export default {
  name: "generateField",
  components: { VueEditor },
  props: {
    field: {
      type: Object,
      required: true,
    },
    closed: {
      // становится активным при клике
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
  data() {
    return {
      editorToolbar,
      enabledForInput: false,
    };
  },
  computed: {
    fieldOptions() {
      if (!this.field.options || !this.field.options.length) return [];
      return this.field.options.map((opt) => this.$t(opt));
    },
    placeholder() {
      return this.$t(this.field.name) || this.field.name;
    },
    errors() {
      return [];
    },
  },
  methods: {
    getComponentName() {
      let componentIs = "";
      Object.entries(fieldTypes).forEach(([key, value]) => {
        if (value.includes(this.field.type)) componentIs = key;
      });
      return componentIs;
    },
    wrapperClickHandler() {
      if (!this.closed || this.enabledForInput) return;

      this.enabledForInput = true;
      this.focus();
    },
    async focus() {
      await this.$nextTick();
      if (this.field.type === "editor") {
        this.$refs[this.field.name].quill.focus();
      } else {
        this.$refs[this.field.name].focus();
      }
    },
    inputHandler(e) {
      this.$emit("input", e);
    },
    blurHandler() {
      this.$emit("blur", this.field.name);
      if (!this.closed) return;

      this.enabledForInput = false;
    },
  },
  created() {
    this.enabledForInput = !this.closed;
  },
};
</script>

<style lang="scss" scoped>
.field-wrapper {
  &.closed {
    &:not(.enabled-for-input) {
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        background: #f1f1f7;
      }
    }
  }
  .text-field {
    min-height: 25px;
    margin-top: -15px;
    div {
      font-size: 16px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
