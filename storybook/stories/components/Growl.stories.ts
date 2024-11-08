
import { Canvas, Meta, Story, ArgsTable, Source } from '@storybook/addon-docs';
import GrowlManager from '@shell/components/GrowlManager.vue';
import store from '@/storybook/.storybook/preview';


<Meta
  title="Components/GrowlManager"
  component={GrowlManager}
/>


export const Template = () => ({
  components: { GrowlManager },
  store,
  template:   '<GrowlManager />',
})

# Growl

The Growl component is used to display asynchronous responses of specific actions overlaid on the top right of the window. The information shown in each message includes the severity, a summary, and any details.

### When to use it

* To provide real-time information to the User about out-of-view events or background processes.
* To display a message which requires User action.
* To display non-critical information that won’t disrupt a workflow.


### When not to use it
* For error messages related to specific form fields.
* For messages that are related to a specific component or view (use inline alerts instead).

### Usage

Messages with different levels of severity can be displayed in the Growl component by dispatching actions to the `growl` store.


#### Info (default)
For events of lower relative importance, or for generic use.

```ts
this.$store.dispatch('growl/info', {
    title:   'Info',
    message: 'This is an info message',
  }, { root: true });
```

#### Success
For reporting the successful completion of an operation or action.

```ts
this.$store.dispatch('growl/success', {
    title:   'Success',
    message: 'This is an success message',
  }, { root: true });
```

#### Warning
For events that require user attention.

```ts
this.$store.dispatch('growl/warning', {
    title:   'Warning',
    message: 'This is an warning message',
  }, { root: true });
```

#### Error
For events that require user action.

```ts
this.$store.dispatch('growl/error', {
    title:   'Error',
    message: 'This is an error message',
  }, { root: true });
```


<Canvas>
  <Story name="Growl">
    {Template.bind({})}
  </Story>
</Canvas>

### Import

<Source
  language='js'
  light
  format={false}
  code={`
     import GrowlManager from '@shell/components/GrowlManager.vue'
  `}
/>
