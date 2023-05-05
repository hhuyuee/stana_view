import Vue from 'vue';
import {
  Button,
  Form,
  FormItem,
  Input,
  Menu,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Popover,
  Dialog,
  Select,
  Option,
  Tooltip,
  MessageBox,
  Row,
  Col,
  Card,
  Autocomplete,
  Drawer,
  Divider,
  CheckboxGroup,
  Checkbox,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Tabs,
  TabPane,
  Slider,
  NavMenu,
  Cascader,
  Scrollbar
} from 'element-ui';
import './element-variable.scss';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Col);
Vue.use(Autocomplete);
Vue.use(Drawer);
Vue.use(Divider);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Slider);
Vue.use(Divider);
Vue.use(Card);
Vue.use(Cascader);
Vue.use(Scrollbar);

Vue.prototype.$ELEMENT = { size: 'normal' };
Vue.prototype.$confirm = MessageBox.confirm;
