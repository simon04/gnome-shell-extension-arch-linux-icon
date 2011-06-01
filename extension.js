/*
 * An extension to replace the "Activities" lettering by an Arch Linux icon.
 *
 * Based on http://blog.fpmurphy.com/2011/04/replace-gnome-shell-activities-text-string-with-icon.html
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const St = imports.gi.St;
const Main = imports.ui.main;

function main() {

  return

  activities = Main.panel.button;

  let logo = new St.Icon({
    icon_type: St.IconType.FULLCOLOR,
      icon_size: activities.height,
      icon_name: 'archlinux-icon-crystal-16'
  });

  let box = new St.BoxLayout();
  box.add_actor(logo);
  activities.set_child(box);

}

