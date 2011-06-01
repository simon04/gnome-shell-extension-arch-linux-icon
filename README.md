## Arch Linux Activities Icon
This GNOME Shell extension replaces the "Activities" lettering by an Arch Linux icon.

### Screenshot
![Screenshot](https://github.com/simon04/gnome-shell-extension-arch-linux-icon/raw/master/screenshot_before.png)
→
![Screenshot](https://github.com/simon04/gnome-shell-extension-arch-linux-icon/raw/master/screenshot_after.png)

### Installation Instructions
1. Install Arch Linux package `archlinux-artwork`
2. Provide symlink to an icon:
> `mkdir -p ~/.local/share/icons`
> `ln -s /usr/share/archlinux/icons/archlinux-icon-crystal-16.svg ~/.local/share/icons/`
3. Install extension:
> `mkdir -p cd ~/.local/share/gnome-shell/extensions/`
> `cd ~/.local/share/gnome-shell/extensions/`
> `git clone URL`
4. Restart GNOME Shell: `[Alt]+[F2]`, `r`
