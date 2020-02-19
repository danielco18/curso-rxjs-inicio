import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const text = document.createElement('div');
text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
<br/>
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien neque, pellentesque in ipsum vitae, vestibulum varius libero. Sed maximus nisl neque, at pretium lorem dictum at. Suspendisse potenti. Ut ultricies, erat vitae tincidunt vulputate, elit dolor elementum orci, at vestibulum libero purus vitae odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam orci sem, gravida eu semper nec, varius vulputate lectus. Aenean at scelerisque lorem. Sed sed est eu sem placerat gravida. Praesent vitae lorem aliquam, cursus augue quis, egestas purus. Donec rhoncus porta porta. Nulla nec pellentesque orci, ut cursus massa.
<br/>
<br/>
Quisque at nunc lectus. Vivamus ultricies pellentesque ipsum et malesuada. Aenean nisl est, pretium a fermentum dignissim, bibendum eget sapien. Quisque efficitur hendrerit pharetra. Cras nec nunc sit amet nisl ultrices venenatis id a leo. Nullam ac blandit sapien. Donec vitae purus quam.
<br/>
<br/>
Morbi eget efficitur lectus. Ut sit amet metus vel nibh aliquet fermentum eget sed tellus. Suspendisse laoreet commodo massa, ac aliquet neque tincidunt a. Cras venenatis rhoncus mattis. Fusce sollicitudin, massa vel sollicitudin malesuada, odio justo volutpat dui, a aliquam mauris lectus quis orci. Nam vitae turpis eu ex semper lobortis. In in massa tincidunt, venenatis arcu et, rutrum nisi. Donec urna dolor, molestie sed sagittis tempor, tristique vitae purus. Sed rhoncus porta sagittis. Fusce sed lacus id eros sodales lacinia et sit amet mi. Nulla sit amet bibendum est, a aliquam ante. Donec consequat eget massa id consectetur.
<br/>
<br/>
Donec nisl massa, aliquet nec pretium ut, pellentesque vel neque. Maecenas id lorem maximus, aliquam purus sed, eleifend purus. Cras pellentesque mauris vel mi mattis, vel maximus lectus dapibus. Aenean sed diam ut magna sagittis vulputate ut eget lacus. Donec ac purus eget nisi finibus lobortis. Aliquam ut mauris tincidunt, elementum odio sit amet, commodo ex. Donec et commodo ligula, et viverra elit. Cras eleifend, mi ac porttitor vehicula, massa justo accumsan sem, eget lobortis urna elit consequat nulla. Vivamus ut nulla tortor. Ut placerat sem aliquam, ullamcorper nulla at, fringilla mauris. Sed ac euismod velit. Morbi dignissim porttitor nibh ac accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/>
<br/>
Nullam vitae enim finibus, luctus mauris a, volutpat ante. Fusce facilisis lorem vitae augue volutpat, vitae condimentum lacus commodo. Morbi erat leo, sagittis eu dignissim quis, dictum ac eros. Nam quis lorem felis. Morbi blandit ante eu fermentum pulvinar. Mauris ornare tellus a sem varius, et elementum est pretium. Etiam a dignissim orci. Etiam eget vulputate purus. Vivamus tempus justo a libero placerat malesuada. Donec sit amet dolor risus. Morbi eget metus vitae elit lacinia suscipit non eu tortor. Duis mattis hendrerit odio, et placerat arcu volutpat in.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//
const calculateScroll = ({ target: { documentElement } }: any) => {
    const { scrollTop, scrollHeight, clientHeight } = documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(map(calculateScroll));

progress$.subscribe((percentage) => {
    progressBar.style.width = `${percentage}%`;
});
