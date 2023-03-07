import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('generated-tinymce', {
    text: 'generated-tinymce button',
    onAction: () => {
      editor.setContent('<p>content added from generated-tinymce</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('generated-tinymce', setup);
};
